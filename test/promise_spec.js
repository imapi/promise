describe("Promise specs", function() {
    var promise, callback;
    beforeEach(function() {
        promise = new Promise();
        callback = {
            rejected: function() {
                //should be called on reject
            },
            resolved: function() {
                //should be called on resolve
            }
        };
        spyOn(callback, 'rejected');
        spyOn(callback, 'resolved');
        promise.then(callback);
        promise.reject(1);
        promise.resolve(2);
    });

    it("tracks that the spy was called", function() {
        expect(callback.rejected).toHaveBeenCalled();
        expect(callback.resolved).toHaveBeenCalled();
    });

    it("tracks its number of calls", function() {
        expect(callback.rejected.calls.length).toEqual(1);
        expect(callback.resolved.calls.length).toEqual(1);
    });

    it("tracks the arguments", function() {
        expect(callback.rejected).toHaveBeenCalledWith(1);
        expect(callback.resolved).toHaveBeenCalledWith(2);
    });
});