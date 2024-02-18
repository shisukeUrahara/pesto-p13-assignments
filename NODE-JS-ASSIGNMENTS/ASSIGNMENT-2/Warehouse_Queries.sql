-- 1. Find the item that has the minimum weight.
SELECT ITEMNO, DESCRIPTION FROM ITEMS WHERE WEIGHT = (SELECT MIN(WEIGHT) FROM ITEMS);

-- 2. Find the different warehouses in "Pune".
SELECT WID, WNAME FROM WAREHOUSES WHERE LOCATION = 'Pune';

-- 3. Find the details of items ordered by a customer named "Mr. Patil".
SELECT I.ITEMNO, I.DESCRIPTION
FROM ITEMS I
JOIN ORDERED_ITEMS OI ON I.ITEMNO = OI.ITEM_ID
JOIN ORDERS O ON OI.ORDER_ID = O.ONO
JOIN CUSTOMER C ON O.CUSTOMER_ID = C.CNO
WHERE C.CNAME = 'Mr. Patil';

-- 4. Find a Warehouse that has the maximum number of stores.
WITH WarehouseStores AS (
    SELECT LOCATION, COUNT(*) as store_count
    FROM WAREHOUSES W
    JOIN STORES S ON W.LOCATION = S.LOCATION_CITY
    GROUP BY LOCATION
)
SELECT LOCATION FROM WarehouseStores WHERE store_count = (SELECT MAX(store_count) FROM WarehouseStores);

-- 5. Find an item that is ordered for a minimum number of times.
WITH ItemOrders AS (
    SELECT ITEM_ID, SUM(ordered_quantity) as total_ordered
    FROM ORDERED_ITEMS
    GROUP BY ITEM_ID
)
SELECT ITEMNO, DESCRIPTION 
FROM ITEMS 
WHERE ITEMNO IN (SELECT ITEM_ID FROM ItemOrders WHERE total_ordered = (SELECT MIN(total_ordered) FROM ItemOrders));

-- 6. Find the detailed orders given by each customer.
SELECT C.CNO, C.CNAME, O.ONO, O.ODATE
FROM CUSTOMER C
JOIN ORDERS O ON C.CNO = O.CUSTOMER_ID;
