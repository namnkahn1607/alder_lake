import { type Button } from './button.ts';
import { type Checkbox } from './checkbox.ts';
import { MacOSFactory, WindowsFactory, type GUIFactory } from './gui_factory.ts';

class Application {
    private button: Button;
    private checkbox: Checkbox;

    constructor(factory: GUIFactory) {
        this.button = factory.createButton();
        this.checkbox = factory.createCheckbox();
    }

    paint(): void {
        this.button.paint();
        this.checkbox.paint();
    }

    static configureApplication(osName: string): Application {
        const factory = osName.toLowerCase().includes('mac') ?
            new MacOSFactory() : new WindowsFactory();

        return new Application(factory); 
    }

    public static main(): void {
        const macOSApp = this.configureApplication('Gemini for Mac');
        macOSApp.paint();

        console.log('');

        const windowsApp = this.configureApplication('Google Gemini');
        windowsApp.paint();
    }
}

Application.main();