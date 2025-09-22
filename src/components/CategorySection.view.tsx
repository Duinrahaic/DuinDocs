import type { CategorySectionProps } from "./CategorySection";

/**
 * CategorySectionView (Presentation Layer)
 *
 * Pure JSX/HTML markup — no logic here.
 */
export default function CategorySectionView({
                                                id,
                                                title,
                                                children,
                                            }: CategorySectionProps) {
    return (
        <section id={id}  className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 text-center lg:pt-32">
            {/* Section header */}
            <h2 className="text-4xl font-bold">
                {title}
            </h2>

            {/* Section content */}
            <div className="flex-1">{children}</div>
        </section>
    );
}
