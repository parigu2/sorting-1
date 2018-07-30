describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
      // your code here 
      expect(split([1,2])).toEqual([[1],[2]]);
    });

    it('is able to split an array with add amount of array into two halves', function() {
        expect(split([1,2,3]).toEqual([[1,2],[3]]);
    })
});