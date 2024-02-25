const data = [
  {
    id: 0,
    name: "Snow Fall",
    image:
      "https://s3-alpha-sig.figma.com/img/0bdb/f0ec/211d295bca21b1784c81e8cb90f83cfc?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WHXBpQewMql-1e-iFvRDUvIIO5agLPn4o2r4hOgqp31Tr~JFIvqo6s4bAgnn3r623HVJTmj2liOOMHr2iU8UVeJdamq3--TgTW1KyzFcCt5nJS88m6bwUzhWf~FHm4wobpcxSxgtY7A3wxX3IgCEx~07juIr7-tTASQ6Nz6poBF~iQ~efXB6uozysaXzoDSeU2T47F~i18AGknghE35wtDp0paNy99RXqRRc206udhyr0k-is~aOs4-fSPdYDOVRgXey4T~YNGZ4c6UlfQsF2YGhT~kLd8Vd-0vVkETpKydJugR53JJilcxQ49SsT5k0~nrA4ycdjWVyav9b75SQpg__",
    price: 70,
  },
  {
    id: 1,
    name: "Pink Elegance",
    image:
      "https://s3-alpha-sig.figma.com/img/ffa5/18a7/885c44f7b7c28d3c489ab944804c4731?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hxhW8z2nQBSryh~mPnZOhCmtRZ-T6ls6fKg~rwuossYPh~F1DdhXTpf4~HUffGlZUcJgy2PCIf0asQZdbFJUNUMtNhjCmyAVyYZqAYWuSdpsfGnIeH5MCZeCoXwI-euv4Fh8YvdfDXOzqLaHwvo5GwEuHoGkZY-7aIM~l35OMBWopi3ztffQB~7h70s5d0fRyb7Z1RYSzF8~9CDPPHs-q3Fxaba7l0slogoYjZbAhXcwIkfJVHgJO2B4ojfsZrvb7F8BR7kmpd5n84yXx0NOwxxAP~VeIwYyotNwbByETCh-e2UZ7XQZ~l83-oBdXcWMYqfsZ2fe9J~zZYnOvGyogA__",
    price: 60,
  },
  {
    id: 2,
    name: "White Magic",
    image:
      "https://plus.unsplash.com/premium_photo-1668611400851-766fe4f6ac1a?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 80,
  },
  {
    id: 3,
    name: "Red & White",
    image:
      "https://images.unsplash.com/photo-1502089418555-ebcba08cb377?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 75,
  },
  {
    id: 4,
    name: "Soothing Pink",
    image:
      "https://images.unsplash.com/photo-1602136303098-f5aa2b9c9df9?q=80&w=1959&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 55,
  },
  {
    id: 5,
    name: "Rose Clash",
    image:
      "https://images.unsplash.com/photo-1613279060119-2053dc14f8d2?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 35,
  },
  {
    id: 6,
    name: "Mix Feast",
    image:
      "https://images.unsplash.com/photo-1558879860-45f24b366ea1?q=80&w=1781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 66,
  },
  {
    id: 7,
    name: "Wild Berries",
    image:
      "https://images.unsplash.com/photo-1591966801718-48eb8ba0f8f3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 110,
  },
  {
    id: 8,
    name: "Classic",
    image:
      "https://s3-alpha-sig.figma.com/img/0f14/c4cf/d34d19649da99e8ae1188d7c72ebba49?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l~UcNrMvtUu4tuMKARSIZHp8GcpJYehmVLCax0WcteJZmCAsX~JWzS4IKgGeNVRy-2UV5JtRr-4KrgwlfTXFIBupXg~tco9ORsDCXp5QQ29vbivkx3~9CtlovByG9AuCxhsgYM4ptCz4ENNRhtet8COskqAFblUgNm76Sy662SmQWg2c6Amv4TFl~Eq-4x9rN0vykn4zEpAYdLjqZSZPGmpjSf3I2iIwkLcZjjz3agPb90AAV1~AvZ1tRHjC1VoXwLEIP58UGDlc8VWfeeYB~V8pUvHbE32ZkE4IoJ1-5NaCBGQ1uv9bQx0LFxDKO0Q9j5PdMFM6Vy~J35cqaFRf2A__",
    price: 55,
  },
  {
    id: 9,
    name: "Bright Moon",
    image:
      "https://s3-alpha-sig.figma.com/img/3f61/c2c0/dd210aaba2ec62222efbad5e3246eddb?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SCBLQe33mVeYhM9deSY6T7GNlYVdOHBMEGLZyiQ1a4brdgI5MMDu0akF8oT2PUL-HHEOmCSTJmvXvDBAxAR8P5GxPEFuZ9NfgqzA5Yf30vlJNVN~dxZaR2uUcSB~CDAEeEPZiDt45CesGbkcPR~kHaarxMzxtXbbKIHZ6VueJkzEFqlvuTka1SjqRGYHQOunXjtvFI8WefTiWRzQS2sR08NQVwmTMj-NFfeCamw4yinkX4HU98-GDrrqe6PhldE9nRCG7Z38B9nDDJHN8u-RWiJEiqzhQs8JzN0~YM2xB744bThEl8Nva-z7elRQ4KtwnLtGuL9NCppJziWxzGlg~A__",
    price: 75,
  },
  {
    id: 10,
    name: "Rustic Charm",
    image:
      "https://s3-alpha-sig.figma.com/img/c288/456f/9a7e57868fc2c6653cf8adf255e40385?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LabIXVzEp1Jievf4F6A5L1Kdp~wC1WLDPVAXfG1vWxRcF3UIVMw1J3O7j32mEetzwkhlOzHbssas-9nqxKRBE~THjYQRidKhp36qATP2A~LwwCWFSfPLIEYALdHNsR6aqmp5RGxF4QlRCp-IOhhwYX5D9PJVDag6ts00iP~RfDF~yd-y49qS7koMvQD312M6yBfu6atHwlQJvFTPVWG9YyQxQiGuoIoe5RxFQiDZhK~TS2a5KIu1yb1UCcXl2SIRQeeCs8eDXFAptfgYEudnom0MBw6N1QF7LO-lKvZWSKJLxI~cHkaNFSTlRC-xSJVYQM2-kKBa6LYudY53-Ra0KA__",
    price: 78,
  },
  {
    id: 11,
    name: "Mini Delight",
    image:
      "https://images.unsplash.com/photo-1587496591538-b83f573655eb?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 25,
  },
];

export default data;
