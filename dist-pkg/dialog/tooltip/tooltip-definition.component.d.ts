export declare class TooltipDefinition {
    static tooltipItemCount: number;
    id: string;
    /**
     * Body content for the `TooltipDefinition`.
     */
    content: string;
    /**
     * The placement in which the `TooltipDefinition` appears.
     * Set to `"top"` to have it positioned above the trigger text
     */
    placement: "bottom" | "top";
    className: boolean;
}
