import SupportCard from "./SupportCard";
import { supports } from "./Support";

export default function SupportCards() {
    return (

        <div className="flex justify-center">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 justify-center flex-1">
                <div></div>
                {supports.map((support) => (
                    <SupportCard key={support.name} {...support} />
                ))}
                <div></div>
            </div>
        </div>


    );
}
