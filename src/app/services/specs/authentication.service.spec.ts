import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { AuthenticationService } from '../authentication.service';
import { LoginRequestBody, LoginResponse, User } from '../../models';
import { API_ROOT_URL } from '../../app.config';

describe('AuthenticationService', () => {
  let service: AuthenticationService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthenticationService],
    });

    service = TestBed.inject(AuthenticationService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize user if a valid token exists in local storage', () => {
    const fakeToken = 'fakeToken';
    const fakeUser: User = {
      userId: '1',
      displayName: 'test',
      username: 'test',
    };
    spyOn(localStorage, 'getItem').and.returnValue(fakeToken);
    spyOn(service, 'extractUser').and.returnValue(fakeUser);

    service.init();

    service.user.subscribe((user) => {
      expect(user).toEqual(fakeUser);
    });
  });

  it('should login and set the user', (done) => {
    const credentials: LoginRequestBody = {
      username: 'test',
    };
    const fakeToken = 'fakeToken';
    const fakeUser: User = {
      userId: '1',
      displayName: 'test',
      username: 'test',
    };
    const fakeResponse: LoginResponse = { token: fakeToken };

    spyOn(
      service as AuthenticationService,
      'extractUser'
    ).and.returnValue(fakeUser);
    spyOn(localStorage, 'setItem').and.callThrough();

    service.login(credentials);

    const req = httpTestingController.expectOne(`${API_ROOT_URL}/login`);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(credentials);
    req.flush(fakeResponse);

    setTimeout(() => {
      service.user.subscribe((user) => {
        expect(user).toEqual(fakeUser);
      });

      expect(localStorage.setItem).toHaveBeenCalledWith(
        service['tokenKey'],
        fakeToken
      );

      done();
    }, 0);
  });

  it('should logout and clear the user', () => {
    spyOn(localStorage, 'removeItem').and.callThrough();

    service.logout();

    service.user.subscribe((user) => {
      expect(user).toBeNull();
    });

    expect(localStorage.removeItem).toHaveBeenCalledWith(service['tokenKey']);
  });
});
