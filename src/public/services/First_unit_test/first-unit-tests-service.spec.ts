import { TestBed } from '@angular/core/testing';

import { FirstUnitTestsService } from './first-unit-tests-service';
import { NewsService } from '../news/news-service';
import { provideHttpClient } from '@angular/common/http';

describe('FirstUnitTestsService', () => {
  let service: FirstUnitTestsService;
  let newsService: NewsService

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()]
    });
    service = TestBed.inject(FirstUnitTestsService);
    newsService = TestBed.inject(NewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add two numbers correctly', () => {
    // Arrange
    const nbr1 = 1;
    const nbr2 = 2;

    const expectedResult = 3;

    // Act
    const result = service.add(nbr1, nbr2)

    //Assert
    expect(result).toBe(expectedResult)
  })

  it('should get news correctly', () => {
    // Arrange
    spyOn(newsService, 'getNews')

    // Act
    service.getNews()

    // Assert
    expect(newsService.getNews).toHaveBeenCalled()
  })



});
