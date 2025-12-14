import { useEffect, useMemo, useRef, useState } from "react";

const CANVAS_SIZE = 1000; // 1000px x 1000px = 1.000.000 pixel
const BLOCK = 10; // blocco minimo 10x10

function makeKey(x, y) {
  return `${x},${y}`;
}

export default function PixelCanvas() {
  const canvasRef = useRef(null);

  // pacchetti (numero di pixel logici)
  const packs = useMemo(
    () => ({
      10: { w: 10, h: 1, label: "10px" },
      50: { w: 10, h: 5, label: "50px" },
      100: { w: 10, h: 10, label: "100px" },
    }),
    []
  );

  const [packSize, setPackSize] = useState(100);
  const [color, setColor] = useState("#ff0000");

  // “database” in memoria dei pixel colorati
  const paintedRef = useRef(new Map()); // key "x,y" -> color

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = CANVAS_SIZE;
    canvas.height = CANVAS_SIZE;

    // sfondo bianco
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

    // griglia (come l'originale)
    drawGrid(ctx);
  }, []);

  const drawGrid = (ctx) => {
    ctx.strokeStyle = "#e6e6e6";
    ctx.lineWidth = 1;

    // linee verticali
    for (let x = 0; x <= CANVAS_SIZE; x += BLOCK) {
      ctx.beginPath();
      ctx.moveTo(x + 0.5, 0);
      ctx.lineTo(x + 0.5, CANVAS_SIZE);
      ctx.stroke();
    }

    // linee orizzontali
    for (let y = 0; y <= CANVAS_SIZE; y += BLOCK) {
      ctx.beginPath();
      ctx.moveTo(0, y + 0.5);
      ctx.lineTo(CANVAS_SIZE, y + 0.5);
      ctx.stroke();
    }
  };

  const redraw = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // sfondo
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

    // pixel colorati
    for (const [key, c] of paintedRef.current.entries()) {
      const [x, y] = key.split(",").map(Number);
      ctx.fillStyle = c;
      ctx.fillRect(x, y, 1, 1);
    }

    // griglia sopra
    drawGrid(ctx);
  };

  const getCellFromEvent = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = Math.floor(e.clientX - rect.left);
    const y = Math.floor(e.clientY - rect.top);
    return { x, y };
  };

  const paintBlock = (startX, startY) => {
    const { w, h } = packs[packSize];

    const x0 = Math.floor(startX / BLOCK) * BLOCK;
    const y0 = Math.floor(startY / BLOCK) * BLOCK;

    for (let yy = 0; yy < h * BLOCK; yy++) {
      for (let xx = 0; xx < w; xx++) {
        const x = x0 + xx;
        const y = y0 + yy;
        paintedRef.current.set(makeKey(x, y), color);
      }
    }

    redraw();
  };

  const handleClick = (e) => {
    const { x, y } = getCellFromEvent(e);
    paintBlock(x, y);
  };

  return (
    <div className="d-flex flex-column gap-3 align-items-center">
      {/* Toolbar */}
      <div className="d-flex flex-wrap gap-3 align-items-center">
        <div className="btn-group">
          {[10, 50, 100].map((n) => (
            <button
              key={n}
              className={`btn btn-sm ${
                packSize === n ? "btn-dark" : "btn-outline-dark"
              }`}
              onClick={() => setPackSize(n)}
            >
              {packs[n].label}
            </button>
          ))}
        </div>

        <div className="d-flex align-items-center gap-2">
          <label className="m-0">Colore:</label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>

        <button
          className="btn btn-sm btn-outline-danger"
          onClick={() => {
            paintedRef.current.clear();
            redraw();
          }}
        >
          Reset
        </button>
      </div>

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        onClick={handleClick}
        style={{
          border: "2px solid #000",
          cursor: "crosshair",
          imageRendering: "pixelated",
        }}
      />
    </div>
  );
}
