/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { PushNotificationService } from './push-notification.service';

describe('Service: PushNotification', () => {
  beforeEach(() => {
    addProviders([PushNotificationService]);
  });

  it('should ...',
    inject([PushNotificationService],
      (service: PushNotificationService) => {
        expect(service).toBeTruthy();
      }));
});
