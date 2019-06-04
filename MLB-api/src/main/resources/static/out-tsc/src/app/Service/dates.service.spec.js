import { TestBed } from '@angular/core/testing';
import { DatesService } from './dates.service';
describe('DatesService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(DatesService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=dates.service.spec.js.map