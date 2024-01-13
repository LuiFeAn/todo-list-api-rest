import { MustBeCompletedIn } from "./must_be_completed_in";
import { negativeDate, positiveDate } from "../../../../helpers/date-generator";

describe('Todo description tests', () => {

    it('should create be completed in', () => {

        const description = new MustBeCompletedIn(positiveDate());
    
        expect(description).toBeTruthy();
    
    });
    
    
    it('should not create a be completed in if the completion date precedes the creation date', () => {
    
        expect( () => new MustBeCompletedIn(new Date(negativeDate()))).toThrow('Completion date precedes creation date')
    
    });


});
