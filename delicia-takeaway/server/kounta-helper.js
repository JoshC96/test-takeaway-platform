module.exports = {
        
    buildOrderOptions: (fields) => {

        // MAY NEED BELOW LINE ITEM TO SEND TO SPECIFIC STORES INSTEAD OF COMPANY NUMBER
        // "site_id": 409
        // "site_id": site.id

        let body = JSON.stringify({
            "notes": "Take away, gold member",
            "order_type": "Dine in",
            "guests": 23,
            "customer_id": 3842,
            "site_id": 409,
            "lines": [{
                "product_id": 730297,
                "quantity": 6,
                "notes": "Extra hot",
                "unit_price": 1.3636
            }, {
                "product_id": 5312,
                "quantity": 1,
                "price_variation": 0.9,
                "modifiers": [228, 228, -3091]
            }],
            "price_limit": 100,
            "price_variation": 1.15,
            "payments": [{
                "method_id": 1,
                "amount": 5.5,
                "ref": "9000768"
            }],
            "callback_uri": "http://third-party.com/update_order_status.json?id=123582936748",
            "complete_when_paid": false,
            "pass_thru_printing": false,
            "lock": ["PAYMENTS"],
            "placed_at": "2013-05-29T11:14:06+10:00",
            "fulfil_at": "2013-05-29T13:00:00+10:00"
        });

        return(
            {
                'method': 'POST',
                'url': process.env.KOUNTA_API_URL+'/companies/5678/orders.json',
                'headers': {
                    'Authorization': process.env.KOUNTA_ACCESS_TOKEN,
                    'Content-Type': 'application/json'
                },
                body: body
            }
        )
    },

    buildNotificationOptions: (fields) => {

        // let orderNumber = fields.orderNumber;

        let body = JSON.stringify({
            "broadcast_level": ["now"],
            "alert_colour": "orange",
            "message": "Customer on Table 4 requires assistance.",
            "duration": 60,
            "register_ids": [456, 487],
            "staff_ids": [12927],
            "expires": "2018-04-01T01:20:00+00:00"
        });

        return(
            {
                'method': 'POST',
                'url': process.env.KOUNTA_API_URL+'/orders/'+orderNumber+'/notifications.json',
                'headers': {
                    'Authorization': process.env.KOUNTA_ACCESS_TOKEN,
                    'Content-Type': 'application/json'
                },
                body: body
            }
        )
    }
};