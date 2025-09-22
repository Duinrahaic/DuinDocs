import type { ReactNode } from "react";
import CategorySectionView from "./CategorySection.view";

export interface CategorySectionProps {
    id?: string;
    title: string;
    children: ReactNode;
}

/**
 * CategorySection (Logic Layer)
 *
 * Handles props and passes them to the view template.
 */
export default function CategorySection(props: CategorySectionProps) {
    // Any logic / state / hooks would go here
    return <CategorySectionView {...props} />;
}
