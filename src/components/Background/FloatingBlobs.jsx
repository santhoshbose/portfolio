import './FloatingBlobs.css';

/**
 * FloatingBlobs — Slowly drifting radial gradient circles
 * Creates a premium, futuristic sense of layered depth behind glass panels.
 */
export default function FloatingBlobs() {
  return (
    <div className="blobs-container" aria-hidden="true">
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
      <div className="blob blob-4" />
    </div>
  );
}
