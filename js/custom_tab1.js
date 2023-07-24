$(function () {
	$(".tabcontent1 > div").hide();
	$(".tabnav1 a")
		.click(function () {
			$(".tabcontent1 > div").hide().filter(this.hash).fadeIn();
			$(".tabnav1 a").removeClass("active");
			$(this).addClass("active");
			return false;
		})
		.filter(":eq(0)")
		.click();

	$(".tabcontent2 > div").hide();
	$(".tabnav2 a")
		.click(function () {
			$(".tabcontent2 > div").hide().filter(this.hash).fadeIn();
			$(".tabnav2 a").removeClass("active");
			$(this).addClass("active");
			return false;
		})
		.filter(":eq(0)")
		.click();

	$(".tab-main > div").hide();
	$("#mainservice .tab-item>li> a")
		.click(function () {
      console.log(this.hash);
			$(".tab-main > div").hide().filter(this.hash).fadeIn();
			$("#mainservice tab-item>li> a").removeClass("active");
			$(this).parent("li").addClass("active");
			return false;
		})
		.filter(":eq(0)")
		.click();
});
