const presence = new Presence({
	clientId: "1310622511419101235",
});

presence.on("UpdateData", async () => {
	presence.setActivity({
		details: "button test #1",
		state: "button test #2",
		buttons: [
			{
				label: "button test",
				url: "https://zaiko.io",
			},
		],
	});
});
