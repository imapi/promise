function Promise() {
    var methods = {
        reject: "rejected",
        resolve: "resolved",
        update: "updated",
        terminate: "terminated"
    }, then, queue = [],
        resolver = function(mapped) {
            return function() {
                if (then && then[methods[mapped]]) {
                    then[methods[mapped]].apply(undefined, arguments);
                } else {
                    queue.push({
                        name: methods[mapped],
                        args: arguments
                    });
                }
            };
        },
        method;
    for (method in methods) {
        if (methods.hasOwnProperty(method)) {
            this[method] = resolver(method);
        }
    }
    this.then = function(callback) {
        if (queue) {
            var i;
            for (i = 0; i < queue.length; i += 1) {
                callback[queue[i].name].apply(undefined, queue[i].args);
            }
            queue = [];
        }
        then = callback;
    };
}