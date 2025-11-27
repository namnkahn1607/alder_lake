import { type Button, MacOSButton, WindowsButton } from './button.ts';
import { type Checkbox, MacOSCheckbox, WindowsCheckbox } from './checkbox.ts';

/* ABSTRACT FACTORY */
interface GUIFactory {
    createButton(): Button;

    createCheckbox(): Checkbox;
}

/* CONCRETE FACTORY */
class MacOSFactory implements GUIFactory {
    createButton(): Button {
        return new MacOSButton();
    }

    createCheckbox(): Checkbox {
        return new MacOSCheckbox();
    }
}

class WindowsFactory implements GUIFactory {
    createButton(): Button {
        return new WindowsButton();
    }

    createCheckbox(): Checkbox {
        return new WindowsCheckbox();
    }
}

export { type GUIFactory, MacOSFactory, WindowsFactory };