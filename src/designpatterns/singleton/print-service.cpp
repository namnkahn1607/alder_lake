#include <iostream>
#include <mutex>
using namespace std;

class PrintService {
private:
    static PrintService* instance;
    static mutex mtx;
    
    string mode;

    PrintService(): mode("Grayscale") {}

public:
    PrintService(const PrintService&) = delete;
    PrintService &operator=(const PrintService&) = delete;

    static PrintService* getInstance() {
        if (instance == nullptr) {
            lock_guard<mutex> lock(mtx);

            if (instance == nullptr) {
                instance = new PrintService();
            }
        }

        return instance;
    }

    std::string getPrinterStatus() { return mode; }

    void setPrinterStatus(const string& newMode) {
        mode = newMode;
        cout << "Shifting mode to" + newMode << endl;
    }
};

int main() {
    return 0;
}