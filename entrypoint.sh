set -e

rm -f tmp/pids/server.pids

exec "$@"

