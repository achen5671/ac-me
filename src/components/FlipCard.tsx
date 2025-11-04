const FlipCard = ({ frontImage, backImage, size = 160 }) => {
  return (
    <div className="flip-card" style={{ width: size, height: size }}>
      <div className="flip-card-inner">
        {/* Front */}
        <div className="flip-card-front rounded-2xl border border-black overflow-hidden">
          <img
            src={frontImage}
            alt="Front"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Back */}
        <div className="flip-card-back rounded-2xl border border-black overflow-hidden">
          <img
            src={backImage}
            alt="Back"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
