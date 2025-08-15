const versions = [
    {
        version: "4.4.5",
        files: [
            { name: "Windows 64位安装包", url: "The_Last_Ending_4.4.5_Windows_x64_Setup_User.exe", size: "20.2MB", platform: "Windows x64" },
            { name: "Windows 64位压缩包", url: "The_Last_Ending_4.4.5_Windows_x64_User.zip", size: "27.7MB", platform: "Windows x64" },
            { name: "Windows 32位压缩包", url: "The_Last_Ending_4.4.5_Windows_x32_User.zip", size: "23.6MB", platform: "Windows x86" },
            { name: "Android 安装包", url: "The_Last_Ending_4.4.5_Android_User.apk", size: "21.8MB", platform: "Android" }
        ]
    },
    {
        version: "4.4",
        files: [
            { name: "Windows64位安装包", url: "The_Last_Ending_4.4_Windows_x64_Setup_User.exe", size: "20.2MB", platform: "Windows x64" },
        ]
    },
    {
        version: "老旧版本",
        files: [
            { name: "4.2 64位Windows安装版", url: "The_Last_Ending_4.2_Setup.exe", size: "2.98MB", platform: "Windows x64" },
            { name: "4.1 64位Windows安装版", url: "The_Last_Ending_4.1_Setup.exe", size: "3.24MB", platform: "Windows x64" },
            { name: "3.3 64位Windows安装版", url: "The_Last_Ending_3.3_Setup.exe", size: "3.27MB", platform: "Windows x64" },
            { name: "3.2 64位Windows安装版", url: "The_Last_Ending_3.2_Setup.exe", size: "3.54MB", platform: "Windows x64" },
            { name: "3.1 64位Windows安装版", url: "The_Last_Ending_3.1_Setup.exe", size: "3.52MB", platform: "Windows x64" }
        ]
    }
];

const select = document.getElementById('version-select');
versions.forEach((v, i) => {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = `${v.version}`;
    select.appendChild(opt);
});

function fillTable(versionIndex) {
    const tableBody = document.querySelector('#download-table tbody');
    tableBody.innerHTML = '';
    const files = versions[versionIndex].files;

    files.forEach(file => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
                    <td>
                        <div class="file-info">
                            <div>
                                <div class="file-name">${file.name}</div>
                                <div class="file-platform">${file.platform}</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        ${file.url === "#"
                ? '<span class="no-download">暂无</span>'
                : `<a href="../download_file/${file.url}" class="download-btn" download>下载</a>`}
                    </td>
                    <td>${file.size}</td>
                `;
        tableBody.appendChild(tr);
    });
}

select.addEventListener('change', e => fillTable(e.target.value));
fillTable(0);