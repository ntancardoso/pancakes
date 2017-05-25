export class FeedServiceMock {
  public feeds: any = [
    {
        "title": "Top 10 Fastfood in PH",
        "image": "http://lorempixel.com/400/225/food/",
        "likes": 56,
        "comments": 83,
        "createdAt": "40 mins",
        "createdBy": { "username": "penguin", "avatar": "https://randomuser.me/api/portraits/lego/7.jpg" }
    }
  ];
}

export class PancakeServiceMock {
  public viewDetails(id) {
      return Promise.resolve({});
  };
}