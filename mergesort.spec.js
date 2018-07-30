describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
      // your code here 
      expect(split([1,2])).toEqual([[1],[2]]);
    });

    it('is able to split an array with odd amount of array into two halves', function() {
        expect(split([1,2,3])).toEqual([[1,2],[3]]);
    })
});

describe('Merge function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
      // test the merging algorithm
      expect(merge([[1],[2]])).toEqual([1,2])
    });
    it('is able to merge two sorted arrays with odd amount into one sorted array', function(){
        // test the merging algorithm
        expect(merge([[1,2],[3]])).toEqual([1,2,3])
      });
  });