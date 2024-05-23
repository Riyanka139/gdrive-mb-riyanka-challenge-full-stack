export const mockData = {
    publicFiles: [ {
        id: "1",
        name: "Document 1.pdf",
        size: 1048576,
        webViewLink: "https://drive.google.com/file/d/1/view",
        owners: [{ displayName: "John Doe", photoLink:"https://tinyurl.com/2vxvykaw", emailAddress: "john.doe@example.com" }],
        permissions: [
            { role: "owner", type: "user", emailAddress: "john.doe@example.com" },
            { role: "reader", type: "anyone" }
        ],
        },
        {
            id: "2",
            name: "secret_key.txt",
            size: 48576,
            webViewLink: "https://drive.google.com/file/d/1/view",
            owners: [{ displayName: "Some Person", photoLink:"https://lh3.googleusercontent.com/a/default-user=s64", emailAddress: "some@email.com" }],
            permissions: [
                { role: "owner", type: "user", emailAddress: "some@email.com" },
                { role: "reader", type: "anyone" }
            ],
        },
    ],
    sharedFiles: [{
        id: "1",
        name: "Document 1.pdf",
        size: 1048576,
        webViewLink: "https://drive.google.com/file/d/1/view",
        owners: [{ displayName: "John Doe", photoLink:"https://tinyurl.com/2vxvykaw", emailAddress: "john.doe@example.com" }],
        permissions: [
            { role: "owner", type: "user", emailAddress: "john.doe@example.com" },
            { role: "reader", type: "user", emailAddress: "some@email.com" },
        ],
        },
        {
            id: "2",
            name: "secret_key.txt",
            size: 48576,
            webViewLink: "https://drive.google.com/file/d/1/view",
            owners: [{ displayName: "Some Person", photoLink:"https://lh3.googleusercontent.com/a/default-user=s64", emailAddress: "some@email.com" }],
            permissions: [
                { role: "owner", type: "user", emailAddress: "some@email.com" },
                { role: "reader", type: "user", emailAddress: "john.doe@example.com" },
            ],
    }],
    totalFiles: 32,
    peopleCount: 3,
    fileTypes: {
        "application": 15,
        "image": 10,
        "text": 2,
        "video":5
    }
}