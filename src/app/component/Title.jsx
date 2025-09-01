export const Title = ({ children, ...props }) => {
  return (
    <div className="flex gap-2">
      <p className="text-[#334155] text-[14px] font-semibold text-<14px>/[<16px>] flex gap-1">
        {props.children}
      </p>
    </div>
  );
};

// text
// color: #334155;
// font-family: Inter;
// font-size: 14px;
// font-style: normal;
// font-weight: 600;
// line-height: 16px; /* 114.286% */
// letter-spacing: -0.14px;

// *
// color: #E14942;
// font-family: Inter;
// font-size: 14px;
// font-style: normal;
// font-weight: 600;
// line-height: 16px;
// letter-spacing: -0.14px;
