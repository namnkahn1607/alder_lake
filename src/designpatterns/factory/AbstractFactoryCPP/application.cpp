#include "gui_factory.hpp"
#include <algorithm>
#include <string>
using namespace std;

class Application {
private:
    unique_ptr<Button> button;
    unique_ptr<Checkbox> checkbox;

public:
    Application(const GUIFactory& factory) {
        button = factory.createButton();
        checkbox = factory.createCheckbox();
    }

    void paint() const {
        button->paint();
        checkbox->paint();
    }

    static unique_ptr<Application> configureApplication(const string& osName) {
        unique_ptr<GUIFactory> factory;
        transform(begin(osName), end(osName), begin(osName), ::tolower);

        if (osName.find("mac") != string::npos) {
            factory = make_unique<MacOSFactory>();
        } else {
            factory = make_unique<WindowsFactory>();
        }

        return make_unique<Application>(*factory);
    }
};

int main() {
    auto macOSApp = Application::configureApplication("Gemini for Mac");
    macOSApp->paint();

    cout << endl;

    auto windowsApp = Application::configureApplication("Google Gemini");
    windowsApp->paint();

    return 0;
}