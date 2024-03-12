env GOOS=darwin GOARCH=amd64 go build -o falfan.sdPlugin/bin/main-darwin main.go
env GOOS=windows GOARCH=amd64 go build -o falfan.sdPlugin/bin/main-windows.exe main.go
