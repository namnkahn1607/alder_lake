/* PRODUCT INTERFACE */
interface Button {
    paint(): void;
}

/* CONCRETE PRODUCT(s) */
class MacOSButton implements Button {
    paint(): void {
        console.log('[ConcreteButton] You\'ve created MacOS Button');
    }
}

class WindowsButton implements Button {
    paint(): void {
        console.log('[ConcreteButton] You\'ve created Windows Button');
    }
}

export { type Button, MacOSButton, WindowsButton };