BEGIN;

DROP TABLE IF EXISTS categories, brands, products CASCADE;

CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  category TEXT NOT NULL
);

CREATE TABLE brands (
  id SERIAL PRIMARY KEY,
  brand TEXT NOT NULL
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  category_id INTEGER REFERENCES categories(id),
  stock INTEGER NOT NULL,
  price DECIMAL(12,2) NOT NULL,
  description TEXT NOT NULL,
  photo_url TEXT NOT NULL,
  variants TEXT NOT NULL, -- Will take in an object as a string to be parsed
  colours TEXT NOT NULL, -- ""                                    ""
  brand_id INTEGER REFERENCES brands(id)
);

INSERT INTO categories (category) VALUES (
    (phone), (laptop), (desktop), (accessories)
);

INSERT INTO brands (brand) VALUES (
    (microsoft), (apple), (logitech), (google)
);

INSERT INTO products (name, category_id, stock, price, description, photo_url, variants, colours, brand_id) VALUES (
    ('Acer Aspire C24', 3, 7, 699, 'Computer with good memory and various screen sizes. Some soiling and wear.', 'https://static2-ecemea.acer.com/media/catalog/product/cache/4d1e466ee0151a7142143e21e5d254f9/_/a/_acer-aspire_c24-1651_main_kbmouse_dq.bg8ek.003.png', `{variants: ['large screen', 'medium screen', 'small screen']}`, `{colours: ['silver', 'space grey', 'burgundy']}`, 1),
  ("Logitech MX Master 3", 4, 1, 55.12, "Ergonomic mouse with a maximum DPI of 4000 with a whopping 7 buttons! Oh and it's laser tracked.", "https://i.ebayimg.com/images/g/FwoAAOSw9UFiqGCE/s-l500.jpg", `{variants: ["wireless", "wired"]}`, `{colours: ["grey"]}`,3),
  ('MacBook Pro 13.3-inch 2020', 2, 2, 1269.00, 'Apple M1 Chip with 8‑Core CPU and 8‑Core GPU', 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202206_GEO_GB?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1654014010023', '{variant: ["256GB SSD Storage", "512GB SSD Storage"]}', '{colors: ["silver", "space grey"]}', 2),
  ('pixel 5',1,5,330,'Mint Pixel series 5th','https://m-cdn.phonearena.com/images/phones/80464-800/Google-Pixel-5.webp','{variants:["5g","4g"]}',`{colours: ["Sorta sage","Just black"]}`,4)
);

COMMIT;