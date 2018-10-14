import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class RepairModuleService {
  getItems() {
    return [
      {
        id: 1,
        name: "WRE5511",
        category: { name: "Washing machine", id: 1 },
        img:
          "https://cdn.pixabay.com/photo/2016/01/28/22/07/washing-machine-1167053_960_720.jpg",
        isWorking: true,
        properties: [
          { name: "brand", content: "Amica" },
          { name: "load type", content: "front" },
          { name: "spin speed", content: "800 RPM" },
          { name: "capacity", content: "5 kg" },
          { name: "color", content: "white" },
          { name: "model", content: "WRE5511" }
        ],
        comments: [
          {
            content: "I'll try to take care of it.",
            user: "Mr. Robot",
            date: new Date(2018, 7, 2, 10, 11)
          },
          {
            content: "Seems like it works.",
            user: "Mr. Robot",
            date: new Date(2018, 7, 4, 9, 32)
          }
        ]
      },
      {
        id: 2,
        name: "ELX11220",
        category: { name: "Washing machine", id: 1 },
        img:
          "https://cdn.pixabay.com/photo/2017/08/22/10/47/washing-machine-2668472_1280.jpg",
        isWorking: false,
        properties: [
          { name: "brand", content: "Electrolux" },
          { name: "load type", content: "front" },
          { name: "model", content: "ELX11220" }
        ],
        comments: [
          {
            content: "Doesn't work. I'll get back to it later.",
            user: "Mrs. Robot",
            date: "Sun Oct 14 2018 18:04:31 GMT+0200"
          }
        ]
      },
      {
        id: 3,
        name: "SMG1918",
        category: { name: "TV", id: 2 },
        img:
          "https://cdn.pixabay.com/photo/2017/07/31/18/28/room-2559790_1280.jpg",
        isWorking: false,
        properties: [
          { name: "brand", content: "Samsung" },
          { name: "model", content: "SMG1918" },
          { name: "color", content: "black" },
          { name: "remote", content: "yes" }
        ],
        comments: []
      },
      {
        id: 3,
        name: "ES551",
        category: { name: "Refrigerator", id: 3 },
        img:
          "http://www.cramptonandmoore.co.uk/media/catalog/product/cache/1/image/750x600/0dc2d03fe217f8c83829496872af24a0/m/f/mff4x.jpg",
        isWorking: false,
        properties: [
          { name: "brand", content: "Electrolux" },
          { name: "model", content: "ES551" }
        ],
        comments: []
      }
    ];
  }

  getCategories() {
    return [
      { name: "Washing machine", id: 1 },
      { name: "TV", id: 2 },
      { name: "Refrigerator", id: 3 }
    ];
  }
}
