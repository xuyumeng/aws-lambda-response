const resp = {
	success(data) {
		return {
			success: true,
			data: data
		};
	},
	unauthorized(message = "Unauthorized") {
		return {
			success: false,
			error: "Unauthorized",
			message: message
		}
	},
	badrequest(message = "Bad request") {
		return {
			success: false,
			error: "BadRequest",
			message: message
		}
	},
	unknownError(message = "Unknown error, please contact us") {
		return {
			success: false,
			error: "UnknownError",
			message: message
		}
	},
	notFound(message = "Not Found") {
		return {
			success: false,
			error: "NotFound",
			message: message
		}
	}
}

export default resp