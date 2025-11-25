#pragma once

#include <iostream>
#include <string>
#include <algorithm>
#include <vector>
#include <memory>
#include <map>
using namespace std;

class File {
private:
    string path;

public:
    explicit File(string p) : path(p) {}

    string getPath() const {
        return path;
    }
};

class IEventListener {
public:
    virtual ~IEventListener() = default;

    virtual void update(const string& eventType, const File& file) = 0;
};

class EventManager {
private:
    map<string, vector<weak_ptr<IEventListener>>> listeners;

public:
    void subscribe(const string& eventType, shared_ptr<IEventListener> listener) {
        listeners[eventType].push_back(listener);
    }

    void unsubscribe(const string& eventType, shared_ptr<IEventListener> listener) {
        auto& users = listeners[eventType];

        users.erase(remove_if(begin(users), end(users), 
            [&](const weak_ptr<IEventListener>& wp) {
                auto sp = wp.lock();
                return !sp || sp == listener;
            }), users.end());
    }

    void notify(const string& eventType, const File& file) {
        auto& users = listeners[eventType];

        for (auto it = begin(users); it != end(users); ) {
            if (auto sp = it->lock()) {
                sp->update(eventType, file);
                ++it;
            } else {
                it = users.erase(it);
            }
        }
    }
};