/* ANOTHER PRODUCT INTERFACE */
interface Checkbox {
    paint(): void;
}

/* CONCRETE PRODUCT(s) */
class MacOSCheckbox implements Checkbox {
    paint(): void {
        console.log('[ConcreteCheckbox] You\'ve created MacOS Checkbox');
    }
}

class WindowsCheckbox implements Checkbox {
    paint(): void {
        console.log('[ConcreteCheckbox] You\'ve created Windows Checkbox');
    }
}

export { type Checkbox, MacOSCheckbox, WindowsCheckbox };