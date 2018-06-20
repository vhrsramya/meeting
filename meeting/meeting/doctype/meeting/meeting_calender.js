frappe.views.calender["Meeting"] = {
    field_map: {
        "start": "start",
        "end": "end",
        "id": "name",
        "title": "title",
        "status": "status",
    },
    get_events_method: "meeting.api.get_meetings"
}