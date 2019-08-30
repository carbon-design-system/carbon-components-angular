/**
 * This is from carbon-components.
 * We need it to format the month select according to specs.
 * Carbon currently doesn't expose this as a seperate package,
 * and we don't import the carbon-components js (on purpose)
 * so some copy pasta is required
 *
 * ref: https://github.com/carbon-design-system/carbon/blob/
 * 	f06f38f0c2ef624e409a3d5711e897a79f4c88fc/packages/components/src/components/date-picker/date-picker.js#L52-L123
 */
export declare const carbonFlatpickrMonthSelectPlugin: (fp: any) => {
    onMonthChange: () => void;
    onOpen: () => void;
    onReady: (() => void)[];
};
