export interface Product {
  id: number;
  link: string;
  name: string;
  img: string[];
  price: number;
  description: string;
  rating: number;
  currentImageIndex: number;
}

export const products = [
  {
    id: 1,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/p28/pf5/15662482.JPG?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/p0b/pf5/15662483.jpg?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/pd2/pf4/15662485.jpg?format=gallery-medium"],
    name: 'Lenovo LOQ 15ARP9',
    price: 511990,
    description: '-	Processor frequency: 4700.0 MHz -	Processor: AMD Ryzen 7 7735HS -	Base processor frequency: 3200.0 MHz -	Cores: 10 -	Chipset type: Processor type -	OS: No OS -	Display: 15.6 inches -	Refresh rate: 144 Hz -	Screen coating: Anti-glare -	Screen type: IPS -	Storage: -	Disk type: SSD -	Storage: 512.0 GB -	Connectivity: USB Type-C, HDMI, RJ-45, headphone/mic combo -	Memory: DDR5 16 GB, RAM 16 GB -	Sound: touchpad, illuminated keyboard -	Graphics, adapter: discrete graphics card Graphics card NVIDIA GeForce RTX™4050 Features and additional information Colour Grey Weight and dimensions Dimensions (DxWxT): 258.7x359.9x23.9mm Weight: 2.38kg',
    link: 'https://kaspi.kz/shop/p/lenovo-loq-15arp9-15-6-16-gb-ssd-512-gb-bez-os-83jc005jrk-132137950/?c=750000000',
    rating: 4.5,
    currentImageIndex:0,
  },
  {
    id: 2,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/hc7/h59/67189057028126.jpg?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/h8a/h46/67189057552414.jpg?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/h8c/hb1/85996739199006.png?format=gallery-medium"],
    name: 'Fourdoor wardrobe with mirror, 160x200x47 cm, white',
    price: 77800,
    description: 'Fourdoor Swing Wardrobe with Mirror, 160x200x47 cm, White',
    link: 'https://kaspi.kz/shop/p/raspashnoi-shkaf-fourdoor-s-zerkalom-160x200h47-sm-belyi-108174703/?c=750000000',
    rating: 5,
    currentImageIndex:0,
  },
  {
    id: 3,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/hd7/h74/63950404878366.jpg?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/h12/h5a/63950406582302.jpg?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/hb9/h89/63950413692958.jpg?format=gallery-medium"],
    name: 'Hoover Deerma DX700S grey ',
    price: 14998,
    description: 'The Deerma DX700S upright vacuum has cyclonic technology with a powerful motor for dry cleaning. It is also hand-held, with a 0.8 litre transparent plastic dirt container.',
    link: 'https://kaspi.kz/shop/p/smart-32g7000-81-sm-chernyi-109729462/?c=750000000',
    rating: 5,
    currentImageIndex:0,
  },
  {
    id: 4,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/h08/h5f/63839171149854.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/haa/h0f/63839173509150.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h67/h6e/63839176720414.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h27/hbb/63839179866142.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/hc7/hbb/63839183142942.jpg?format=gallery-medium"],
    name: 'Ibanez GRG121DX-BKF Black',
    price: 134990,
    description: 'Electric guitar with 6 strings, superstrat body shape, not specifically designed for left-handed players.',
    link: 'https://kaspi.kz/shop/p/ibanez-grg121dx-bkf-black-14200417/?c=750000000',
    rating: 5,
    currentImageIndex:0,
  },{
    id: 5,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/h4c/h48/84690345918494.jpg?format=gallery-medium"],
    name: 'REALTECH 37455530 белый',
    price: 3000000,
    description: 'Windows 11 Pro system with Intel Core i9-14900KF, 64GB RAM, 2TB SSD, NVIDIA GeForce RTX 4090, 4TB HDD, housed in a Midi-Tower case.',
    link: 'https://kaspi.kz/shop/p/realtech-37455530-belyi-115260839/?c=750000000',
    rating: 0,
    currentImageIndex:0,
  },{
    id:6,
    img:["https://resources.cdn-kaspi.kz/img/m/p/heb/h8a/64496092479518.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h7f/h86/64496095625246.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/hc4/h6b/64496098705438.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/hf2/ha3/64496101261342.jpg?format=gallery-medium"],
    name:"Logitech MX Master 3S",
    price:49106,
    description:"Sensor Type: Optical LED, Connection Type: Wireless (USB, Bluetooth), Interface: USB, Bluetooth, Design: Right-handed, Gaming: No, Optical Sensor Resolution: 8000.0 dpi.",
    link:"https://kaspi.kz/shop/p/logitech-mx-master-3s-910-006560-seryi-106172406/?c=750000000",
    rating: 5,
    currentImageIndex:0,
  },{
    id:7,
    img:["https://resources.cdn-kaspi.kz/img/m/p/h03/h02/64026264174622.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/hb3/hfa/64026265518110.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h9f/h05/64026268467230.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h0e/h71/64026270498846.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h2e/hda/64026273939486.jpg?format=gallery-medium"],
    name:"Samsung Odyssey G9 C49G95TSSI LC49G95TSSIXCI",
    price:958898,
    description:"Diagonal: 48.9 inches, Resolution: 5120x1440, LCD Matrix Type: TFT *VA, Brightness: 420.0 cd/m², Response Time: 1.0 ms, Max Refresh Rate: 240.0 Hz, Inputs: HDMI, DisplayPort.",
    link:"https://kaspi.kz/shop/p/samsung-odyssey-g9-c49g95tssi-lc49g95tssixci-chernyi-belyi-101114775/?c=750000000",
    rating: 4.5,
    currentImageIndex:0,
  }
  ,{
    id:8,
    img:["https://resources.cdn-kaspi.kz/img/m/p/h17/h7f/64441029918750.jpg?format=gallery-medium"],
    name:"Кварцевые Seiko SSE019J1",
    price:2251300,
    description:"Time Display: Analog (hands), Type: Quartz, Case Material: Titanium, For: Men, Color: Black.",
    link:"https://kaspi.kz/shop/p/kvartsevye-seiko-sse019j1-titan-104529276/?c=750000000",
    rating: 0,
    currentImageIndex:0,
  },{
    id:9,
    img:["https://resources.cdn-kaspi.kz/img/m/p/h26/hc5/83559836745758.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h00/h67/83559836811294.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h1e/h31/83559836876830.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/hb8/hf8/83559836942366.jpg?format=gallery-medium"],
    name:"Apple iPhone 15 Pro 1Tb",
    price:806704,
    description:"NFC Technology: Yes, Color: Blue, Screen Type: OLED, Super Retina XDR display, Diagonal: 6.1 inches, RAM Size: 8 GB, Processor: 6-core Apple A17 Pro, Internal Storage: 1024.0 GB, Battery Capacity: 3279.0 mAh.",
    link:"https://kaspi.kz/shop/p/apple-iphone-15-pro-1tb-sinii-113138344/?c=750000000",
    rating: 5,
    currentImageIndex:0,
  },{
    id:10,
    img:["https://resources.cdn-kaspi.kz/img/m/p/hf5/hf5/84077662830622.png?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/hfe/hbf/84077662961694.png?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h11/h43/84077663027230.jpg?format=gallery-medium"],
    name:"Dyson Gen5detect",
    price:576482,
    description:"Type: Vertical, Cleaning: Dry, Dust Collector Type: Container, Power Consumption: 752.0 W, Power Source: Battery, Color: Purple.",
    link:"https://kaspi.kz/shop/p/dyson-gen5detect-fioletovyi-113592857/?c=750000000",
    rating: 4.5,
    currentImageIndex:0,
  }
];

