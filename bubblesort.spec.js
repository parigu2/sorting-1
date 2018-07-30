describe('Bubble Sort', function(){

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles a single item', function() {
    expect( bubbleSort([1]) ).toEqual( [1] );
  });

  it('handles multiple item', function() {
    expect( bubbleSort([4, 2, 3, 5, 1]) ).toEqual( [1, 2, 3, 4, 5] );
  })

  // beforeAll(function () {
  //   spyOn(tootsiepop, 'lick').and.callThrough(); // replace existing `tootsiepop['lick']` method
  // });
  // it('getting to the center of tootsiepop involves exactly three licks', function () {
  //   tootsiepop.getToCenter();
  //   expect(tootsiepop.lick.calls.count()).toEqual(3);
  // });

  it('calls swap x times', function() {
    spyOn(window, 'swap').and.callThrough();
    bubbleSort([4, 2, 3, 5, 1]);
    expect(swap.calls.count()).toEqual(10);
  })
});
