/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { WebSQLService } from './web-sql.service';

describe('Service: WebSQL', () => {
  beforeEach(() => {
    addProviders([WebSQLService]);
  });

  it('should ...',
    inject([WebSQLService],
      (service: WebSQLService) => {
        expect(service).toBeTruthy();
      }));
});
