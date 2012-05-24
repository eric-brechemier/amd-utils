define(['./hasOwn', '../lang/isObject'], function (hasOwn, isObject) {

    /**
     * Deep merge objects.
     * @version 0.1.0 (2012/05/24)
     */
    function merge(target) {
        var i = 1,
            key, val, obj;

        while (obj = arguments[i++]) {
            for (key in obj) {
                if ( ! hasOwn(obj, key) ) {
                    continue;
                }

                val = obj[key];

                if ( isObject(val) ) {
                    if ( isObject(target[key]) ) {
                        // inception
                        merge(target[key], val);
                    } else {
                        target[key] = val;
                    }
                } else {
                    target[key] = val;
                }

            }
        }

        return target;
    }

    return merge;

});
