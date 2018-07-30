describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles a single item', function() {
    expect( bubbleSort([1]) ).toEqual( [1] );
  });

  it('handles multiple item', function() {
    expect( bubbleSort([4, 2, 3, 5, 1] ).toEqual( [1, 2, 3, 4, 5] ));
  })
});
