import { FeedService } from './feed-service';
import { TestBed, inject, async } from '@angular/core/testing';
import { Http, HttpModule, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';


describe('Feed Service', () => {

    beforeEach(async(() => {
 
        TestBed.configureTestingModule({
 
            declarations: [
 
            ],
 
            providers: [
                FeedService,
                MockBackend,
                BaseRequestOptions,
                {
                    provide: Http, 
                    useFactory: (mockBackend, options) => {
                        return new Http(mockBackend, options);
                    },
                    deps: [MockBackend, BaseRequestOptions]
                }
            ],
 
            imports: [
                HttpModule
            ]
 
        }).compileComponents();
 
    }));

    it('should have a non empty pancakes array', inject([FeedService, MockBackend], (feedService, mockBackend) => {

        const mockResponse = '[{"title":"Test 1"}]';

        mockBackend.connections.subscribe((connection) => {
 
            connection.mockRespond(new Response(new ResponseOptions({
                body: mockResponse
            })));
 
        });

        feedService.load().then(data => {
            expect(Array.isArray(data)).toBeTruthy;
            expect(data.length).toBeGreaterThan(0);
        });


    }));

    
});