import React, { useEffect, useRef, useState } from "react";

function ScannerModal({ onDetected, onClose }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
  const rafRef = useRef(null);
  const detectorRef = useRef(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    const stopStream = () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop());
        streamRef.current = null;
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };

    const start = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" },
        });
        if (!mounted) {
          // component unmounted while getting permissions
          stream.getTracks().forEach((t) => t.stop());
          return;
        }
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await videoRef.current.play();
        }

        const hasDetector = "BarcodeDetector" in window;
        if (hasDetector) {
          try {
            detectorRef.current = new window.BarcodeDetector({
              formats: [
                "code_128",
                "ean_13",
                "ean_8",
                "upc_e",
                "upc_a",
                "qr_code",
              ],
            });
          } catch (e) {
            detectorRef.current = null;
          }
        }

        const scan = async () => {
          if (!videoRef.current || videoRef.current.readyState < 2) {
            rafRef.current = requestAnimationFrame(scan);
            return;
          }

          const video = videoRef.current;
          const canvas = canvasRef.current;
          if (canvas && video.videoWidth && video.videoHeight) {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

            try {
              if (detectorRef.current) {
                const results = await detectorRef.current.detect(canvas);
                if (results && results.length) {
                  const code = results[0].rawValue || results[0].rawValue;
                  onDetected && onDetected(code);
                  stopStream();
                  return;
                }
              }
            } catch (e) {
              // detection error -- continue trying
              console.error("BarcodeDetector error:", e);
            }
          }

          rafRef.current = requestAnimationFrame(scan);
        };

        rafRef.current = requestAnimationFrame(scan);
      } catch (err) {
        console.error("getUserMedia error:", err);
        setError(err?.message || "Could not access camera");
      }
    };

    start();

    return () => {
      mounted = false;
      stopStream();
    };
  }, [onDetected]);

  const handleClose = () => {
    // ensure camera stopped before closing
    try {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop());
        streamRef.current = null;
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    } catch (e) {
      // ignore
    }
    onClose && onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white rounded p-4 w-[95%] max-w-2xl">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-medium">Scan barcode</h3>
          <button
            onClick={handleClose}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            Close
          </button>
        </div>

        <div className="w-full h-[360px] bg-black rounded overflow-hidden flex items-center justify-center">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            playsInline
            muted
          />
          <canvas ref={canvasRef} className="hidden" />
        </div>

        {error ? (
          <p className="mt-2 text-sm text-red-600">{error}</p>
        ) : (
          <p className="mt-2 text-sm text-gray-600">
            Point your camera at the product barcode. If scanning does not
            start, ensure your browser supports the BarcodeDetector API and
            camera permissions are granted.
          </p>
        )}
      </div>
    </div>
  );
}

export default ScannerModal;
