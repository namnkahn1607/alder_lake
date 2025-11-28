#include "file.hpp"
#include <memory>
#include <algorithm>
#include <vector>
#include <iostream>

class Directory : public SystemNode {
private:
    string name;
    vector<unique_ptr<SystemNode>> children;

public:
    Directory(string dir) : name(move(dir)) {}

    void add(unique_ptr<SystemNode> node) {
        if (!node) return;

        children.push_back(move(node));
    }

    void remove(const string& targetName) {
        auto it = remove_if(children.begin(), children.end(), 
            [&targetName](const unique_ptr<SystemNode>& node) {
                return node->getName() == targetName;
            });

        if (it != children.end()) {
            children.erase(it, children.end());
        }
    }

    bool isLeaf() const override {
        return false;
    }

    long long getSize() const override {
        long long cost = 0;

        for (const auto& child : children) {
            cost += child->getSize();
        }

        return cost;
    }

    string getName() const override {
        return name;
    }
};

int main() {
    // 1. Create Composites
    auto root = make_unique<Directory>("root");
    auto home = make_unique<Directory>("home");
    auto user = make_unique<Directory>("user");

    // 2. Add Leaves directly into the structure
    // user -> files
    user->add(make_unique<File>("sys_config.json", 200));
    user->add(make_unique<File>("logo.png", 5000));

    // home -> user
    home->add(move(user)); // 'user' pointer is now null in main scope!
    home->add(make_unique<File>("todo.txt", 100));

    // root -> home
    root->add(move(home));

    // 3. Execution
    cout << "Total System Size: " << root->getSize() << " bytes" << endl;

    return 0;
}