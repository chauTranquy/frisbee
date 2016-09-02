/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { TeamService } from './team.service';

describe('Service: Team', () => {
  beforeEach(() => {
    addProviders([TeamService]);
  });

  it('should ...',
    inject([TeamService],
      (service: TeamService) => {
        expect(service).toBeTruthy();
      }));
});
