frappe.listview_settings['Meeting'] = {
    get_indicator: function(doc){
        return[__(doc.status),{
            "Planned": "blue",
            "Invitation Sent": "orange",
            "In Progress": "red",
            "Completed": "green",
            "cancelled": "darkgrey"
        }[doc.status], "status,=," + doc.status];
    }
};