define(['src/object/merge'], function (merge) {

    describe('object/merge()', function () {

        it('should merge object properties into first obj', function () {

            var obj1 = {a: 0, b: 1};
            var obj2 = {c: 2, d: 3};
            var obj3 = {a: 4, d: 5};

            var out = {a:4, b:1, c:2, d:5};

            expect( merge(obj1, obj2, obj3) ).toEqual( out );
            expect( obj1 ).toEqual( out );

        });


        it('should do a deep merge', function () {

            var obj1 = {a: {b: 1, c: 1, d: {e: 1, f: 1}}};
            var obj2 = {a: {b: 2, d : {f : 'yeah'} }};

            expect( merge(obj1, obj2) ).toEqual( {a: {b : 2, c : 1, d : {e : 1, f : 'yeah'}}}  );

        });

    });

});
