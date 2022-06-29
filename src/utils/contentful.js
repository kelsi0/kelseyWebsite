export function fetchContentful(query) {
    return window
    .fetch(`https://graphql.contentful.com/content/v1/spaces/69v5xsxlo5gg/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer lFmI8kh54j6iuWfUmrGD_PhTZehXoU0IAhfOvI-o4Ns",
        },
        body: JSON.stringify({ query }),
    })
        .then((response) => response.json())
        .then(({ data, errors }) => {
        if (errors) {
            console.error(errors);
        }

    return data;
    });
}