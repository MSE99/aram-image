
describe('index.js', () => {
    it('should log hello world to console.', () => {
        const spy = jest.spyOn(console, 'log').mockImplementationOnce(() => {})
        
        require('./index')
        
        expect(spy).toHaveBeenCalledTimes(1)
        expect(spy).toHaveBeenCalledWith('hello world!')
    })
})
