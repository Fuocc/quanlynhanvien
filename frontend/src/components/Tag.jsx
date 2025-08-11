export default function Tag({ children, isFilled }) {
    return isFilled ? (
        <div className="inline-block w-max text-[#6366F1] bg-[#E0E7FF] font-medium text-sm py-2 px-6 rounded-[10px]">
            {children}
        </div>
    ) : (
        <div className="inline-block w-max text-[#334155] font-medium text-sm py-2 px-6 border border-[#EDEDED] rounded-[10px]">
            {children}
        </div>
    );
}
